<script setup>
const props = defineProps({
    product: {
        type: Object,
        default: () => ({
            name: '',
            description: '',
            price: 0,
            image: '/img/home-img.png',
            count: 1,
        }),
    }
})
// 小记
const total = computed(() => {
    return parseFloat(props.product.price) * props.product.count
})

const { limitText, formatPrice } = useUtils()
const { viewProduct } = useProduct()

const cartStore = useCartStore()
</script>
<template>
    <tr
        class="flex w-full justify-around flex-col gap-y-4 md:flex-row p-4 rounded-sm bg-first-gray-950 outline outline-transparent hover:outline-first transition-all">
        <td class="flex justify-center items-center flex-col gap-4 w-full md:text-center md:items-center cursor-pointer"
            @click="viewProduct(props.product.id)">
            <img :src="props.product.image" class="w-36" />
            <div class="flex flex-col w-full">
                <b class="text-lg">{{ limitText(props.product.name, 20) }}</b>
                <p class="text-sm text-first-gray-400">{{ limitText(props.product.description, 20) }}</p>
            </div>
        </td>

        <ShopCartTableRowContainer label="单价">
            <span>¥ {{ formatPrice(props.product.price) }}</span>
        </ShopCartTableRowContainer>

        <ShopCartTableRowContainer label="数量">
            <UiCounter v-model="props.product.count" />
        </ShopCartTableRowContainer>

        <ShopCartTableRowContainer label="小计">
            <span>¥ {{ formatPrice(total) }}</span>
        </ShopCartTableRowContainer>



        <td class="w-full flex justify-center items-center">
            <UiButton label="删除" class="btn-error w-full" icon="i-ri-delete-bin-line"
                @click="cartStore.remove(props.product.id)" />
        </td>
    </tr>
</template>