<script lang="ts">
export let label: string;

function showMessage() {
	alert('Hello!');
}
</script>
<button on:click={showMessage}>{label}</button>