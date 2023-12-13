<template>
  <UiSectionContainer>
    <div
      class="grid dark:bg-container-dark justify-self-center bg-container px-6 md:px-12 pb-6 lg:grid-cols-2 lg:pb-0 lg:grid-cols-[450px 380px] lg:h-[442px] lg:gap-x-24"
    >
      <CardLamp class="-translate-y-1/4 lg:-translate-y-[8.5rem]" />
      <div
        class="pt-10 grid items-start gap-y-2 grid-rows-[max-content] h-full lg:h-[442px] lg:justify-center lg:pt-24"
      >
        <UiSectionHeader title="私人定制">
          请在下方留下您的邮箱，我们将为您提供个性化定制服务，期待为您创造独一无二、温暖而贴心的灯具。
        </UiSectionHeader>

        <!-- 定制请求表单 -->
        <FormCustom />
      </div>
    </div>
  </UiSectionContainer>
</template>
