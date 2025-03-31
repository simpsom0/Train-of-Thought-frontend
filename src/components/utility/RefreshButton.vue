<script setup lang="ts">
  /**
   * Temporary button that helps reload the Wails window
   * when the UI code is changed
   */

  import { WindowReload } from '@WailsJsRuntime';

  function callRefresh(): void {
    WindowReload();
  }
</script>

<template>
  <button
    @click="callRefresh()"
    :class="[
      'fixed top-1 left-1',
      'rounded-md',
      'bg-c-purple-300 hover:bg-c-purple-500 active:bg-c-purple-700'
    ]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#000000"
    >
      <path
        d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"
      />
    </svg>
  </button>
</template>
