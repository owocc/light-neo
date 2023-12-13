<script setup>
// 读取配置中的数组,加载卡片文字和描述
const { featuredList } = useFeatureConfig()
</script>
<template>
  <UiSectionContainer grid>
    <CardLamp
      lamp-image="img/features-lamp.png"
      img-class="lg:!w-[320px]"
      class="md:order-1"
    />
    <div>
      <UiSectionHeader title="特色亮点" align="center">
        独一无二的设计与高效照明，星光与灯完美融合，赋予您的空间别样魅力
      </UiSectionHeader>

      <!-- 特色亮点卡片 -->
      <div class="grid grid-cols-2 gap-6 mt-12">
        <CardFeatures
          v-for="feature in featuredList"
          :title="feature.title"
          :desc="feature.desc"
        />
      </div>
    </div>
  </UiSectionContainer>
</template>
