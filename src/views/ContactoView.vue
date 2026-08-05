<script setup lang="ts">
import { reactive, ref } from 'vue';
import PageHeading from '@/components/ui/PageHeading.vue';
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';

const form = reactive({
  name: '',
  email: '',
  message: '',
});

const errors = reactive<Record<string, string>>({});
const isSent = ref(false);

const channels = [
  { icon: 'fas fa-envelope', label: 'Correo', value: 'labsoft@eafit.edu.co' },
  { icon: 'fas fa-location-dot', label: 'Ubicación', value: 'Bloque 19, Universidad EAFIT' },
  { icon: 'fas fa-city', label: 'Ciudad', value: 'Medellín, Colombia' },
];

function validate() {
  delete errors.name;
  delete errors.email;
  delete errors.message;

  if (!form.name.trim()) {
    errors.name = 'Escribe tu nombre.';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Escribe un correo válido.';
  }
  if (form.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres.';
  }

  return Object.keys(errors).length === 0;
}

function handleSubmit() {
  if (!validate()) {
    isSent.value = false;
    return;
  }

  // Sin backend todavía: por ahora solo confirmamos en la interfaz.
  isSent.value = true;
  form.name = '';
  form.email = '';
  form.message = '';
}

const fieldClass =
  'w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/30 transition-colors focus:border-emerald-400 focus:outline-none';
</script>

<template>
  <section class="animate-fade-in-up pt-12">
    <PageHeading
      subtitle="¿Tienes una idea, un proyecto o una pregunta? Escríbenos y te respondemos."
    />

    <div class="grid gap-8 lg:grid-cols-5">
      <!-- Canales de contacto -->
      <div class="flex flex-col gap-4 lg:col-span-2">
        <article
          v-for="channel in channels"
          :key="channel.label"
          class="glass-hover flex items-center gap-4 rounded-3xl p-6"
        >
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10"
          >
            <i :class="channel.icon" class="text-emerald-400" aria-hidden="true"></i>
          </div>
          <div>
            <p class="text-sm text-white/40">{{ channel.label }}</p>
            <p class="font-semibold">{{ channel.value }}</p>
          </div>
        </article>
      </div>

      <!-- Formulario -->
      <div class="glass rounded-3xl p-8 lg:col-span-3">
        <form novalidate class="flex flex-col gap-5" @submit.prevent="handleSubmit">
          <div>
            <label for="name" class="mb-2 block text-sm font-medium text-white/70">Nombre</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Tu nombre"
              :class="fieldClass"
            />
            <p v-if="errors.name" class="mt-2 text-sm text-red-400">{{ errors.name }}</p>
          </div>

          <div>
            <label for="email" class="mb-2 block text-sm font-medium text-white/70">Correo</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="tucorreo@eafit.edu.co"
              :class="fieldClass"
            />
            <p v-if="errors.email" class="mt-2 text-sm text-red-400">{{ errors.email }}</p>
          </div>

          <div>
            <label for="message" class="mb-2 block text-sm font-medium text-white/70"
              >Mensaje</label
            >
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              placeholder="Cuéntanos en qué podemos ayudarte"
              :class="fieldClass"
            ></textarea>
            <p v-if="errors.message" class="mt-2 text-sm text-red-400">{{ errors.message }}</p>
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <PrimaryButton type="submit" show-chevron>Enviar mensaje</PrimaryButton>
            <p v-if="isSent" class="text-sm font-medium text-emerald-400">
              ¡Gracias! Hemos recibido tu mensaje.
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
