// external libraries imports
import { onBeforeUnmount, onMounted, ref } from 'vue';

// main export
export default function useScrolled(threshold = 24) {
  // reactive variables
  const isScrolled = ref(false);

  // functions
  function handleScroll() {
    const scrolled = window.scrollY > threshold;

    if (scrolled !== isScrolled.value) {
      isScrolled.value = scrolled;
    }
  }

  // on mounted
  onMounted(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  // main export
  return { isScrolled };
}
