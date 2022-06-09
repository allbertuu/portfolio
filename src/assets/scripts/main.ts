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
  sr.reveal(".intervalCardReveal", { interval: 500 });
  sr.reveal(".intervalCardRevealSmall", { interval: 300 });
}

export function scrollTo(id?: string) {
  if (!id) {
    return;
  }

  let el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
    })
  }
  else {
    console.error('Seção não existe.');
  }
}

export function convertWeekdayNumberToString(numberWeekday: number) {
  switch (numberWeekday) {
    case 0:
      return 'Domingo';
    case 1:
      return 'Segunda';
    case 2:
      return 'Terça';
    case 3:
      return 'Quarta';
    case 4:
      return 'Quinta';
    case 5:
      return 'Sexta';
    case 6:
      return 'Sábado';
    default:
      break;
  }
}