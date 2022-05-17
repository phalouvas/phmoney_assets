
<script lang="ts">
export default {
  name: 'Vue Tailwind Pagination',
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 9
    },
    pageRange: {
      type: Number,
      default: 2
    },
    textBeforeInput: {
      type: String,
      default: 'Go to page'
    },
    textAfterInput: {
      type: String,
      default: 'Go'
    }
  },
  data() {
    return {
      input: '',
    }
  },
  methods: {
    hasFirst: function () {
      return this.rangeStart !== 1
    },
    hasLast: function () {
      return this.rangeEnd < this.totalPages
    },
    hasPrev: function () {
      return this.current > 1
    },
    hasNext: function () {
      return this.current < this.totalPages
    },
    changePage: function (page) {
      if (page > 0 && page <= this.totalPages) {
        this.$emit('page-changed', page)
      }
    }
  },
  computed: {
    pages: function () {
      var pages = []

      for (var i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i)
      }

      return pages
    },
    rangeStart: function () {
      var start = this.current - this.pageRange

      return (start > 0) ? start : 1
    },
    rangeEnd: function () {
      var end = this.current + this.pageRange

      return (end < this.totalPages) ? end : this.totalPages
    },
    totalPages: function () {
      return Math.ceil(this.total / this.perPage)
    },
    nextPage: function () {
      return this.current + 1
    },
    prevPage: function () {
      return this.current - 1
    }
  }
};
</script>

<template>
  <div class="min-w-max">
    <section class="flex justify-between bg-white rounded-lg border border-gray-200 px-10 py-3 text-gray-700 font-montserrat">
      <div class="flex items-center">
        <div class="pr-6" v-if="hasPrev()">
          <a href="#" @click.prevent="changePage(prevPage)">
            <div class="flex items-center justify-center hover:bg-gray-200 rounded-md h-6 w-6">
              <div class="">
                <span class="material-icons-outlined">navigate_before</span>
              </div>
            </div>
          </a>
        </div>
        <div class="pr-6" v-if="hasFirst()">
          <a href="#" @click.prevent="changePage(1)">
            <div class="flex hover:bg-gray-200 rounded-md h-6 w-6 items-center justify-center">
          <span class="">
            1
          </span>
            </div>
          </a>
        </div>
        <div class="pr-6" v-if="hasFirst()">...</div>
        <div class="pr-6" v-for="page in pages">
          <a href="#" @click.prevent="changePage(page)">
            <div :class="{'bg-gradient-to-r from-sky-400 to-sky-400': current == page}"
                 class="flex hover:bg-gray-200 rounded-md h-6 w-6 items-center justify-center">
              <span class="">{{ page }}</span>
            </div>
          </a>
        </div>
        <div class="pr-6" v-if="hasLast()">...</div>
        <div class="pr-6" v-if="hasLast()">
          <a href="#" @click.prevent="changePage(totalPages)">
            <div class="flex hover:bg-gray-200 rounded-md h-6 w-6 items-center justify-center">
          <span class="">
            {{ totalPages }}
          </span>
            </div>
          </a>
        </div>
        <div class="pr-6" v-if="hasNext()">
          <a href="#" @click.prevent="changePage(nextPage)">
            <div class="flex items-center justify-center hover:bg-gray-200 rounded-md h-6 w-6">
              <div class="">
                <span class="material-icons-outlined">navigate_next</span>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="flex items-center">
        <div class="pr-2 text-gray-400 font-medium">
          <span id="text-before-input">
            {{ textBeforeInput }}
          </span>
        </div>
          <input v-model.number="input" class="h-6 w-12 focus:outline-none px-2 rounded-md border border-gray-400" type="text">
        <div @click.prevent="changePage(input)" class="flex items-center pl-4 font-medium cursor-pointer">
          <span id="text-after-input">
            {{ textAfterInput }}
          </span>
          <span class="material-icons-outlined">navigate_next</span>
        </div>
      </div>
    </section>
  </div>
</template>

