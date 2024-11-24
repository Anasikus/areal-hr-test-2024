<template>
  <div>
    <h2>Таблица организаций и отделов</h2>
    <table>
      <thead>
        <tr>
          <th>Организация</th>
          <th>Отдел</th>
          <th>Комментарий</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(org, index) in data" :key="'org-' + index">
          <td :rowspan="org.departments.length">{{ org.organization }}</td>
          <td v-for="(dept, deptIndex) in org.departments" :key="'dept-' + deptIndex">
            {{ dept.name }}
          </td>
          <td>{{ org.departments[0].comment }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "OrganizationsTable",
  data() {
    return {
      data: [
        {
          organization: "Организация А",
          departments: [
            { name: "Отдел 1", comment: "Описание отдела 1" },
            { name: "Отдел 2", comment: "Описание отдела 2" },
          ],
        },
        {
          organization: "Организация Б",
          departments: [
            { name: "Отдел 3", comment: "Описание отдела 3" },
          ],
        },
      ],
    };
  },
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}
</style>
