<template>
    <div class="weather-widget">
      <div class="search-container">
        <input type="text" v-model="city" placeholder="Masukkan nama kota">
        <button @click="searchWeather">Cari</button>
      </div>
      <div v-if="loading" class="loading">Sedang memuat...</div>
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="weather && !loading && !error" class="weather-info">
        <h2>Cuaca di {{ weather.name }}</h2>
        <div class="weather-details">
          <p>
            <i class="fas fa-thermometer-three-quarters"></i> Suhu: {{ weather.main.temp }}°C
          </p>
          <p>
            <i class="fas fa-tint"></i> Kelembapan: {{ weather.main.humidity }}%
          </p>
          <p>
            <i class="fas fa-wind"></i> Kecepatan Angin: {{ weather.wind.speed }} m/s
          </p>
          <p>
            <i class="fas fa-cloud"></i> {{ weather.weather[0].description }}
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WeatherWidget',
    data() {
      return {
        weather: null,
        city: 'Jakarta', // Kota default
        loading: false,
        error: null
      }
    },
    mounted() {
      this.fetchWeather();
    },
    methods: {
      fetchWeather() {
        this.loading = true;
        this.error = null;
        const apiKey = '42406fb2d84344a8781e78193548f2c4';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`;
  
        fetch(url)
          .then(response => response.json())
          .then(data => {
            if (data.cod === "404") {
              this.error = "Kota tidak ditemukan.";
              this.weather = null;
            } else {
              this.weather = data;
            }
          })
          .catch(error => {
            this.error = 'Gagal mengambil data cuaca.';
            this.weather = null;
          })
          .finally(() => {
            this.loading = false;
          });
      },
      searchWeather() {
        this.fetchWeather();
      }
    }
  }
  </script>
  
  <style scoped>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
  
  .weather-widget {
    background: linear-gradient(to bottom right, #e0eafc, #cfdef3);
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    padding: 20px;
    width: 350px;
    margin: 20px auto;
    text-align: center;
    animation: fadeIn 1s ease-in-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .search-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .search-container input[type="text"] {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px 0 0 5px;
    width: 200px;
    outline: none;
    transition: border-color 0.3s;
  }
  
  .search-container input[type="text"]:focus {
    border-color: #007bff;
  }
  
  .search-container button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .search-container button:hover {
    background-color: #0056b3;
  }
  
  .weather-info {
    text-align: left;
  }
  
  .weather-details {
    margin-top: 20px;
  }
  
  .weather-details p {
    font-size: 18px;
    margin: 10px 0;
    display: flex;
    align-items: center;
  }
  
  .weather-details p i {
    margin-right: 10px;
    color: #007bff;
  }
  
  .loading, .error {
    font-size: 18px;
    color: #ff0000;
  }
  
  .loading {
    color: #0000ff;
  }
  </style>
  