// external libraries imports
import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue';

// main export
export default function useHeroVideo(video: Ref<HTMLVideoElement | null>) {
  // reactive variables
  const isPlaying = ref(false);
  const prefersReducedMotion = ref(false);

  // functions
  function play() {
    if (!video.value || prefersReducedMotion.value) {
      return;
    }

    video.value.muted = true;
    video.value.playsInline = true;

    video.value.play().catch(() => {
      isPlaying.value = false;
    });
  }

  function handleVisibilityChange() {
    if (!document.hidden) {
      play();
    }
  }

  function handlePlaying() {
    isPlaying.value = true;
  }

  // on mounted
  onMounted(() => {
    prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion.value) {
      return;
    }

    video.value?.addEventListener('playing', handlePlaying);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    play();
  });

  onBeforeUnmount(() => {
    video.value?.removeEventListener('playing', handlePlaying);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  });

  // main export
  return { isPlaying, prefersReducedMotion };
}
