import ScrollReveal from 'scrollreveal';

export default ScrollReveal();

export function initScrollReveal() {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
  });
  
  sr.reveal(".delaySmallReveal", { delay: 200 });
  sr.reveal(".delayMediumReveal", { delay: 400 });
  sr.reveal(".delayLargeReveal", { delay: 600 });
  sr.reveal(".delayExtraBigReveal", { delay: 800 });
  sr.reveal(".intervalCardReveal", { interval: 700 });
}

export function scrollTo(id: string) {
  if (id === 'Without prop') {
    return;
  }

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