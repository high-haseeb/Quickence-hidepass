// Function to hide specific elements and change their styles
const hidePasswordElements = () => {
  const selectors = ['.svg-icon', '.icon-eye', '.iconfont', '.show-pwd'];
  selectors.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      element.style.display = "none";
      if (selector === '.show-pwd') {
        element.style.color = "blue";
      }
    });
  });
};

// MutationObserver callback to apply changes on DOM mutations
const mutationCallback = (mutationsList) => {
  mutationsList.forEach((mutation) => {
    if (mutation.type === 'childList' || mutation.type === 'attributes') {
      hidePasswordElements();
    }
  });
};

// Create and configure the MutationObserver
const observer = new MutationObserver(mutationCallback);
observer.observe(document.body, {
  childList: true, // Watch for changes in the children of the target node
  subtree: true, // Watch for changes in the entire subtree of the target node
  attributes: true, // Watch for attribute changes
  attributeFilter: ['class', 'style'] // Specify which attributes to watch for changes
});

// Initial function call to apply changes
hidePasswordElements();
