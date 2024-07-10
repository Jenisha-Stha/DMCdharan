<template>
  <section class="py-7">
    <v-container>
        <h1 class="text-center text-4xl pb-3 text-[#447c9d]">Download</h1>
      <table>
        <tr>
          <th class="text-lg">Subject</th>
          <th class="text-lg">Actions</th>
        </tr>
        <tr v-for="download in downloads.data" :key="download.id">
            <td>{{ download.title }}</td>
            <td v-if="download.file != null">
                <a href="#" :download="download.file">Download</a>
            </td>
            <td v-else>
                <a :href="download.googleDrive" target="_blank">Download</a>
            </td>
        </tr>
      </table>
    </v-container>
  </section>
</template>

<script setup>
const { data: downloads } = await useFetch(
  "https://dmcdharan.com/api/download"
);
</script>

<style  scoped>
table{
    width: 100%;
    text-align: left;
    border: 1px solid rgb(226, 223, 223);
}
th,td{
    padding: 10px 10px;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
