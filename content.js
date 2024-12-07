function addItem(newItem) {
  chrome.storage.local.get("ANSWERS", (result) => {
    const ANSWERS = result.ANSWERS || [];
    ANSWERS.push(newItem);
    chrome.storage.local.set({ ANSWERS }, () => {
      console.log("Item added:", newItem);
    });
  });
}

window.addEventListener(
  "keydown",
  function (e) {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
      e.stopImmediatePropagation();
    }
  },
  true
);

window.addEventListener(
  "contextmenu",
  (event) => {
    event.stopImmediatePropagation();
  },
  true
);

const html = document.documentElement;
const newHtml = html.cloneNode(true);
const newBody = newHtml.querySelector("body");

html.parentNode.replaceChild(newHtml, html);

const originalPreventDefault = Event.prototype.preventDefault;
Event.prototype.preventDefault = function () {
  if (
    this.type === "keydown" &&
    (this.key === "F12" || (this.ctrlKey && this.shiftKey && this.key === "I"))
  ) {
    return;
  }
  originalPreventDefault.call(this);
};

Object.defineProperty(document, "visibilityState", {
  get: function () {
    return "visible";
  },
});

Object.defineProperty(document, "hidden", {
  get: function () {
    return false;
  },
});

document.addEventListener(
  "visibilitychange",
  function (event) {
    event.stopImmediatePropagation();
    event.preventDefault();
  },
  true
);

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "b") {
    chrome.storage.local.set({ "Auto Refresh": false }, () => {
      if (chrome.runtime.lastError) {
        console.error("Error saving state", chrome.runtime.lastError);
      }
    });
  }
});

document.body.style = "";

const floatingButton = document.createElement("button");

floatingButton.style.position = "fixed";
floatingButton.style.bottom = "20px";
floatingButton.style.right = "20px";
floatingButton.style.width = "60px";
floatingButton.style.height = "60px";
floatingButton.style.borderRadius = "50%";
floatingButton.style.backgroundColor = "#4CAF50";
floatingButton.style.backgroundImage =
  "linear-gradient(45deg, #4CAF50, #81C784)";
floatingButton.style.color = "white";
floatingButton.style.border = "none";
floatingButton.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.1)";
floatingButton.style.cursor = "pointer";
floatingButton.style.zIndex = "9999";
floatingButton.style.outline = "none";
floatingButton.style.fontSize = "24px";
floatingButton.style.display = "flex";
floatingButton.style.alignItems = "center";
floatingButton.style.justifyContent = "center";
floatingButton.style.transition = "transform 0.3s ease";
floatingButton.style.transform = "scale(1)";

floatingButton.onmouseover = () => {
  floatingButton.style.transform = "scale(1.1)";
};

floatingButton.onmouseleave = () => {
  floatingButton.style.transform = "scale(1)";
};

const popupMenu = document.createElement("div");
popupMenu.style.position = "fixed";
popupMenu.style.bottom = "80px";
popupMenu.style.right = "20px";
popupMenu.style.width = "280px";
popupMenu.style.backgroundColor = "white";
popupMenu.style.border = "1px solid #ddd";
popupMenu.style.borderRadius = "12px";
popupMenu.style.padding = "20px";
popupMenu.style.boxShadow = "0px 6px 18px rgba(0, 0, 0, 0.1)";
popupMenu.style.zIndex = "9998";
popupMenu.style.display = "none";
popupMenu.style.maxHeight = "400px";
popupMenu.style.overflowY = "auto";
popupMenu.style.transition = "opacity 0.3s ease, transform 0.3s ease";
popupMenu.style.transform = "translateY(10px)";
popupMenu.style.opacity = "0";

const createToggle = (optionKey) => {
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.justifyContent = "space-between";
  container.style.alignItems = "center";
  container.style.marginBottom = "12px";
  container.style.fontSize = "16px";

  const label = document.createElement("span");
  label.textContent = optionKey;

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.style.appearance = "none";
  toggle.style.width = "40px";
  toggle.style.height = "20px";
  toggle.style.backgroundColor = "#ddd";
  toggle.style.borderRadius = "10px";
  toggle.style.position = "relative";
  toggle.style.cursor = "pointer";
  toggle.style.transition = "background-color 0.3s ease";

  chrome.storage.local.get([optionKey], (result) => {
    const isChecked = result[optionKey] === true;
    toggle.checked = isChecked;
    toggle.style.backgroundColor = isChecked ? "#4CAF50" : "#ddd";
  });

  toggle.addEventListener("change", () => {
    const newState = toggle.checked;
    toggle.style.backgroundColor = newState ? "#4CAF50" : "#ddd";

    chrome.storage.local.set({ [optionKey]: newState }, () => {
      if (chrome.runtime.lastError) {
        console.error("Error saving state", chrome.runtime.lastError);
      }
    });
  });

  container.appendChild(label);
  container.appendChild(toggle);

  return container;
};

const labels = ["Auto Answer", "Auto Next Question", "Auto Refresh"];
labels.forEach((label) => {
  chrome.storage.local.get([label], (result) => {
    if (!(label in result)) {
      chrome.storage.local.set({ [label]: false }, () => {
        console.log(`Loaded ${label}`);
      });
    }
  });
});
labels.forEach((option) => {
  popupMenu.appendChild(createToggle(option));
});

const createSlider = () => {
  const container = document.createElement("div");
  container.style.marginTop = "20px";
  container.style.paddingTop = "10px";
  container.style.borderTop = "1px solid #ddd";
  container.style.fontSize = "16px";
  container.style.color = "#333";

  const label = document.createElement("label");
  label.textContent = "Wait Time (0-20s):";
  label.style.display = "block";
  label.style.marginBottom = "8px";

  const sliderWrapper = document.createElement("div");
  sliderWrapper.style.display = "flex";
  sliderWrapper.style.alignItems = "center";
  sliderWrapper.style.gap = "10px";

  const slider = document.createElement("input");
  slider.type = "range";
  slider.min = "0";
  slider.max = "20";
  slider.style.width = "70%";
  slider.style.cursor = "pointer";

  const input = document.createElement("input");
  input.type = "number";
  input.min = "0";
  input.max = "20";
  input.style.width = "50px";
  input.style.textAlign = "center";
  input.style.border = "1px solid #ddd";
  input.style.borderRadius = "4px";
  input.style.padding = "4px";

  chrome.storage.local.get(["sliderValue"], (result) => {
    const value = result.sliderValue || 0;
    slider.value = value;
    input.value = value;
  });

  slider.addEventListener("input", () => {
    const value = slider.value;
    input.value = value;
    chrome.storage.local.set({ sliderValue: parseInt(value, 10) }, () => {
      if (chrome.runtime.lastError) {
        console.error("Error saving slider value", chrome.runtime.lastError);
      }
    });
  });

  input.addEventListener("input", () => {
    let value = parseInt(input.value, 10);
    if (value >= 0 && value <= 20) {
      slider.value = value;
      chrome.storage.local.set({ sliderValue: value }, () => {
        if (chrome.runtime.lastError) {
          console.error("Error saving slider value", chrome.runtime.lastError);
        }
      });
    } else if (value < 0 || value > 20) {
      input.value = slider.value;
    }
  });

  sliderWrapper.appendChild(slider);
  sliderWrapper.appendChild(input);
  container.appendChild(label);
  container.appendChild(sliderWrapper);

  return container;
};

popupMenu.appendChild(createSlider());

chrome.storage.local.get("ANSWERS", ({ ANSWERS }) => {
  const paragraphContainer = document.createElement("div");
  paragraphContainer.style.marginTop = "20px";
  paragraphContainer.style.fontSize = "14px";
  paragraphContainer.style.lineHeight = "1.4";
  paragraphContainer.style.color = "#333";

  const paragraph1 = document.createElement("p");
  paragraph1.textContent = `Questions stored: ${ANSWERS.length}`;

  paragraphContainer.appendChild(paragraph1);
  popupMenu.appendChild(paragraphContainer);
});

floatingButton.innerHTML = "👺";

let isPopupOpen = false;
floatingButton.onclick = () => {
  isPopupOpen = !isPopupOpen;
  popupMenu.style.display = isPopupOpen ? "block" : "none";
  popupMenu.style.opacity = isPopupOpen ? "1" : "0";
  popupMenu.style.transform = isPopupOpen
    ? "translateY(0)"
    : "translateY(10px)";
  floatingButton.innerHTML = isPopupOpen ? "✖" : "👺";
};

document.onclick = (event) => {
  if (
    !floatingButton.contains(event.target) &&
    !popupMenu.contains(event.target)
  ) {
    isPopupOpen = false;
    popupMenu.style.display = "none";
    popupMenu.style.opacity = "0";
    popupMenu.style.transform = "translateY(10px)";
    floatingButton.innerHTML = "👺";
  }
};

document.body.appendChild(popupMenu);
document.body.appendChild(floatingButton);

const questionEl = document.querySelector("h4.mb-4");
const question = questionEl ? questionEl.innerHTML : "";

const optionEls = document.querySelectorAll(".answers-list .form-check-label");
const options = optionEls
  ? [...optionEls].map((label) => label.textContent.trim())
  : [];

chrome.storage.local.get("ANSWERS", ({ ANSWERS }) => {
  if (chrome.runtime.lastError) {
    console.error("Error retrieving data:", chrome.runtime.lastError);
  } else {
    const nextQuestionExists = !![...document.querySelectorAll("span")].find(
      (s) => s.textContent === "Nowe pytanie"
    );

    chrome.storage.local.get("Auto Next Question", (result) => {
      if (result["Auto Next Question"] && nextQuestionExists) {
        const nextQuestion = document.querySelector(".btn-primary");
        nextQuestion?.click();
      }
    });

    const foundAnswer = ANSWERS.find((qa) => qa.question_title === question);
    if (foundAnswer) {
      optionEls.forEach((label) => {
        if (label.textContent.trim() === foundAnswer.answer) {
          label.style.border = "4px solid LawnGreen";

          chrome.storage.local.get(null, (result) => {
            if (result["Auto Answer"]) {
              setTimeout(() => {
                label.click();
                const submit = document.querySelector("#submit-button");
                submit.click();
              }, result.sliderValue * 1000);
            }
          });
        }
      });
    } else if (question && options.length) {
      const correctAnswer = document.querySelector(".alert-success");
      if (correctAnswer) {
        const answer = document.querySelector(".correct").textContent.trim();
        addItem({
          question_id: -1,
          question_title: question,
          answer,
        });

        return;
      }

      chrome.storage.local.get("Auto Refresh", (result) => {
        if (result["Auto Refresh"]) {
          window.location.reload();
        }
      });

      const TEMPLATE = `Podaj prawidłową odpowiedź na to pytanie:
Pytanie: ${question}
Dostępne odpowiedzi:
${options.join("\n")}
Odpowiedz tylko prawidłową odpowiedzią.`;

      navigator.clipboard.writeText(TEMPLATE);
    }
  }
});

console.log("loaded");
