<template>
  <div id="teleport-component">
    <h3>Teleport元（コンポーネント）</h3>
    <div>↓↓↓↓Teleport元↓↓↓↓</div>
    <teleport to="#teleport-target">
      このテキストがTeleportされます
    </teleport>
    <div>↑↑↑↑Teleport元↑↑↑↑</div>
  </div>
</template>
<style scoped>
#teleport-component {
  background:#d5d5ff;
}
</style>
