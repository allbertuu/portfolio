export function scrollTo(id: string) {
  let el = document.getElementById(id);
  if (el !== null) {
    el.scrollIntoView({
      behavior: 'smooth',
    })
  }
  else {
    console.error('Seção não existe.');
  }
}