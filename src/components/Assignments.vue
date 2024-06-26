<template>
  <div class="assignments">
    <h2>Daftar Tugas Pertemuan</h2>
    <ul>
      <li v-for="i in 7" :key="i">
        <a :href="assignmentUrls[i - 1]" target="_blank">Tugas Pertemuan {{ i }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Assignments',
  data() {
    return {
      assignmentUrls: [
        "https://223510242-project-cv.vercel.app/",
        "https://ami-halaman-web.vercel.app/",
        "https://ami-todos.vercel.app/",
        "https://aminested.vercel.app/",
        "https://tugas5-ami.vercel.app/",
        "https://tugas6amimelanda.vercel.app/",
        "https://tugas7-todolist.vercel.app/"
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.assignments {
  text-align: center;
  background: linear-gradient(to bottom right, #ffffff, #f0f0f0);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: 40px auto;
  transition: transform 0.3s, box-shadow 0.3s;
  font-family: 'Roboto', sans-serif;
}

.assignments:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.assignments h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
}

.assignments ul {
  list-style: none;
  padding: 0;
}

.assignments li {
  margin: 15px 0;
}

.assignments a {
  display: inline-block;
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s;
  font-size: 18px;
}

.assignments a:hover {
  background-color: #0056b3;
  transform: translateY(-3px);
}
</style>
