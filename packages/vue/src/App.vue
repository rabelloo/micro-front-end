<template>
  <h1>Vue {{ version }}</h1>
  Current name is <code>{{ name }}</code>
  <label>
    Type to change name
    <input :value="name" @input="onInput" />
  </label>
  <p>
    Changed internally <code>{{ count }}</code> times
  </p>
</template>

<script lang="ts">
import { defineComponent, PropType, version } from 'vue';

export default defineComponent({
  data() {
    return { count: 0, version };
  },
  props: {
    name: String,
    onNameChange: Function as PropType<(name: string) => void>,
  },
  methods: {
    onInput(e: KeyboardEvent) {
      const input = e.currentTarget as HTMLInputElement;
      this.count++;
      this.onNameChange?.(input.value);
    },
  },
});
</script>
