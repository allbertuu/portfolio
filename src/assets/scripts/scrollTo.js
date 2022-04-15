export function scrollTo(id) {
  let el = document.getElementById(id);
  el.scrollIntoView({
    behavior: 'smooth',
  })
}