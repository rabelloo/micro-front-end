<script lang="ts">
  export let name: string;
  export let onNameChange: (name: string) => void;

  let count = 0;

  function onInput(e: Event) {
    const input = e.currentTarget as HTMLInputElement;
    count++;
    onNameChange(input.value);
  }
</script>

<h1>Svelte</h1>
Current name is
<code>{name}</code>
<label>Type to change name <input value={name} on:input={onInput} /></label>
<p>Changed internally <code>{count}</code> times</p>
