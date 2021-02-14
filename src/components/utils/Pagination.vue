<template>
  <nav class="is-flex is-justify-content-center mt-4 mb-4">
    <a class="button is-info is-outlined is-small">Previous</a>
    <ul class="is-flex is-small paginator">
      <li><a class="button is-info is-outlined is-small is-current">1</a></li>
      <li><a class="button is-info is-outlined is-small">45</a></li>
      <li>
        <a class="button is-info is-outlined is-small">46</a>
      </li>
      <li><a class="button is-info is-outlined is-small">47</a></li>
      <li><a class="button is-info is-outlined is-small">86</a></li>
    </ul>
    <a class="button is-info is-outlined is-small">Next page</a>
  </nav>
</template>

<script>
export default {
  name: 'Pagination'
}
</script>

<style lang="scss" scoped>
.paginator {
  li {
    margin-left: 5px;
    margin-right: 5px;
  }
}
</style>