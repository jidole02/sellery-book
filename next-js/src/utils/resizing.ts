export const resizing = (id: string) => {
  const textarea = document.getElementById(id);
  textarea.style.height = textarea.scrollHeight.toString() + "px";
};
