<script setup>
const cartStore = useCartStore()
const {formatPrice} = useUtils()
</script>
<template>
    <!-- 购物车结算 -->
    <div class=" w-full bg-first-gray/5 p-4 flex  gap-4 rounded-sm flex-col md:flex-row md:items-center md:justify-between">
        <div class="flex items-center">
            <Icon name="i-ri-shopping-cart-2-line" class="text-2xl" />
            <span class="ml-2">共计
                <span class="text-xl font-bold px-1 text-first">{{ cartStore.num }}</span>
                件商品
            </span>
        </div>
        <div class="flex flex-col md:flex-row md:items-center gap-4">
            <span class="text-xl">合计: ¥ {{ formatPrice(cartStore.total) }}</span>
            <button class="bg-first-gray/10 hover:bg-first-gray/20 transition-all px-4 py-2 rounded-md flex-1" @click="$router.push('/pay')">结算</button>
        </div>
    </div>
</template>