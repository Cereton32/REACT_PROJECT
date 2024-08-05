document.addEventListener("DOMContentLoaded", () => {
  function customRender(reactElem, container) {
    const domelementTobeinseterd = document.createElement(reactElem.type);

    // Set the attributes and content
    domelementTobeinseterd.innerHTML = reactElem.content;
    domelementTobeinseterd.setAttribute("href", reactElem.props.href);
    domelementTobeinseterd.setAttribute("target", reactElem.props.target);

    container.appendChild(domelementTobeinseterd);
  }

  const reactContainer = document.querySelector("#root");
  const reactElement = {
    type: "a",
    props: {
      href: "http://www.google.com",
      target: "_blank",
    },
    content: "click me get to my portfolio website ",
  };

  customRender(reactElement, reactContainer);
});
