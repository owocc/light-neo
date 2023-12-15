<script setup>
const props = defineProps({
    label: String,
})
</script>
<template>
    <td class="flex justify-between w-full items-center md:justify-center md:text-center h-12 md:h-auto">
        <span class="md:hidden">{{ props.label }}:</span>
        <slot />
    </td>
</template>