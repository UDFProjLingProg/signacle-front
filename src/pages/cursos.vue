<template>
  <div>
    <div class="d-flex">
      <div class="col-8">
        <div class="icons" style=" justify-content: left;
                        display: flex;
                        justify-content: space-evenly;
                        padding-top: 50px;">
          <div class="container text-center">
            <div class="row row-cols-auto" style="padding-left: 40px;">
              <div class="col" v-for="(curso, i) in cursos" :key="i">
                <div class="hover-div position-relative">
                  <img :src="curso.logo"
                       class="rounded-circle" alt="..." style="height: 120px; width: 120px; ">
                  <img :src="curso.auxImg"
                       width="400px" alt="Imagem " class="dropdown-image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-4 d-flex flex-column align-items-center ">
        <div class="logo-signacle" style="height: 200px; width: 200px;">
          <img
            src="https://s3-alpha-sig.figma.com/img/46b1/ce85/7615b51c226c2d30c3b094c4f6606489?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XYz7~rokEtDjtwQ3ymwovLGJ28zjunI-5ZBjuttpVpiXNV-eoFpsYndehqGSD~zG1JM1kmfzqcTB~AzHKKyiImaTzJOv3htiYVaYQpEo7G-04mI3t0cMN29j-YPcToy13na1RnhIYks40WZPclKpJXsXGfiRJhJZn86uBsicDGylu1o4063VpsBebXFl4r~JF5tOfH0E-nJrMoFKdfkVjKyUocXo4~zw1p-pT63Ce6GYs77jkHO2B733w8wEjxU3k2fhjOOOWQBDETht64HYdyznqetK8zROwj3VSDEaedSY-Q5Q1gJZhGk0ghmSj2sB1yxT7ZA00eNCZgTFdfXhcg__"
            class="card-img-top" alt="...">
        </div>
        <div class="embed-responsive embed-responsive-16by9" style="align-items: end;">
          <iframe src="https://www.youtube.com/embed/EZxkymw426U" title="Alfabeto de LIBRAS - COMPLETO E INESQUECÍVEL"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
const cursos = [
  {
    logo: 'https://s3-alpha-sig.figma.com/img/dd0b/be56/01ddbb971b4f708480fd541cdf3ba895?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nXg-WP-uIdvz3UFcfKlH05jJMDEicRSoHSjBDb1wJjkrV5qFTUqF6JzWc4TgUtWINE~Z77qfDtC6VOH--lNvqcTlgq7W9Ac4MDrNOhAKU4eyZi3RPGCGrlv91UKjDUZLoLtIl0CQeErlXEK2MoFi8QVJymHN0LnmmRKxmnSSAcX6~rVYMlARVHFX1j8vjbjNP0bJL6jsLAw37~9L9n4jHKoKWHwlUUynAkIKFQR4M-M5kQzAA1pc9zf5wjA8f1T6SV5HJjJOO8mFFAHWZrdPi8hfqfVq5etSpOSaUCO608uubvM00BkuYT4iU1ezPGuEdJfMSO-PI1oAXCZbSWra-w__',
    auxImg: 'https://s3-alpha-sig.figma.com/img/d098/f908/607f3c33fa871b126d263cc1320acee8?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ao7TYaHD6GU8C-bKXK7EGULxE7ty-CfxvfLcj~X~XaSIUSxVC9wxs5Telec6K2lAg8gVu4pIsyhPZ2xJalkCPY3zCXwM4Y2yNkE~EBPpWTJxLYU6a2B9r3qAxIFSoMNKlvBdC8hDpEe6jURw2DSwG0Qt1OBHwtAmDUR~iPJkDAypQG0NtI4R2kGN~6tmpFQo72wgPPDh6uZJnjonwC46LWNvYHpTudkqjJT4AVnp6gUApFZCB6ewUOaMgB~YmbaM~GXoAq07iMnZVAMxHCoUoT4yi~ifp0MLjTwdS5gYZ~mqPTVVnZvF3FLqBJtpL-DpFqd3HL~-yaRcmkZxxtvdEQ__'
  },
  {
    logo: 'https://s3-alpha-sig.figma.com/img/dd0b/be56/01ddbb971b4f708480fd541cdf3ba895?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nXg-WP-uIdvz3UFcfKlH05jJMDEicRSoHSjBDb1wJjkrV5qFTUqF6JzWc4TgUtWINE~Z77qfDtC6VOH--lNvqcTlgq7W9Ac4MDrNOhAKU4eyZi3RPGCGrlv91UKjDUZLoLtIl0CQeErlXEK2MoFi8QVJymHN0LnmmRKxmnSSAcX6~rVYMlARVHFX1j8vjbjNP0bJL6jsLAw37~9L9n4jHKoKWHwlUUynAkIKFQR4M-M5kQzAA1pc9zf5wjA8f1T6SV5HJjJOO8mFFAHWZrdPi8hfqfVq5etSpOSaUCO608uubvM00BkuYT4iU1ezPGuEdJfMSO-PI1oAXCZbSWra-w__',
    auxImg: 'https://s3-alpha-sig.figma.com/img/d098/f908/607f3c33fa871b126d263cc1320acee8?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ao7TYaHD6GU8C-bKXK7EGULxE7ty-CfxvfLcj~X~XaSIUSxVC9wxs5Telec6K2lAg8gVu4pIsyhPZ2xJalkCPY3zCXwM4Y2yNkE~EBPpWTJxLYU6a2B9r3qAxIFSoMNKlvBdC8hDpEe6jURw2DSwG0Qt1OBHwtAmDUR~iPJkDAypQG0NtI4R2kGN~6tmpFQo72wgPPDh6uZJnjonwC46LWNvYHpTudkqjJT4AVnp6gUApFZCB6ewUOaMgB~YmbaM~GXoAq07iMnZVAMxHCoUoT4yi~ifp0MLjTwdS5gYZ~mqPTVVnZvF3FLqBJtpL-DpFqd3HL~-yaRcmkZxxtvdEQ__'
  },
  {
    logo: 'https://s3-alpha-sig.figma.com/img/d098/f908/607f3c33fa871b126d263cc1320acee8?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ao7TYaHD6GU8C-bKXK7EGULxE7ty-CfxvfLcj~X~XaSIUSxVC9wxs5Telec6K2lAg8gVu4pIsyhPZ2xJalkCPY3zCXwM4Y2yNkE~EBPpWTJxLYU6a2B9r3qAxIFSoMNKlvBdC8hDpEe6jURw2DSwG0Qt1OBHwtAmDUR~iPJkDAypQG0NtI4R2kGN~6tmpFQo72wgPPDh6uZJnjonwC46LWNvYHpTudkqjJT4AVnp6gUApFZCB6ewUOaMgB~YmbaM~GXoAq07iMnZVAMxHCoUoT4yi~ifp0MLjTwdS5gYZ~mqPTVVnZvF3FLqBJtpL-DpFqd3HL~-yaRcmkZxxtvdEQ__',
    auxImg: 'https://s3-alpha-sig.figma.com/img/d098/f908/607f3c33fa871b126d263cc1320acee8?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ao7TYaHD6GU8C-bKXK7EGULxE7ty-CfxvfLcj~X~XaSIUSxVC9wxs5Telec6K2lAg8gVu4pIsyhPZ2xJalkCPY3zCXwM4Y2yNkE~EBPpWTJxLYU6a2B9r3qAxIFSoMNKlvBdC8hDpEe6jURw2DSwG0Qt1OBHwtAmDUR~iPJkDAypQG0NtI4R2kGN~6tmpFQo72wgPPDh6uZJnjonwC46LWNvYHpTudkqjJT4AVnp6gUApFZCB6ewUOaMgB~YmbaM~GXoAq07iMnZVAMxHCoUoT4yi~ifp0MLjTwdS5gYZ~mqPTVVnZvF3FLqBJtpL-DpFqd3HL~-yaRcmkZxxtvdEQ__'
  },
  {
    logo: 'https://s3-alpha-sig.figma.com/img/3089/18cf/2c8eb9fd8b39094744d5201845aec345?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DW9QNtKv2yoXsQR1IDmUf7fkV~xahRRUqulpKR13hflJo9Kb2hEN7XwO0EMJb3~Tkgh9ITd9uR9vwSQP6gn1oxslNpXxBJuWqPvm8qJ9V0UdlAO-9mqYQfN~ES0BjnHqAQ68omIae0vOC6tz8nyZY70fuhxnbj~t3lw-4g2ZHHLhpZRz8sIqV3eNRpnlb2XsPaAMM~WFFwfKozILudUo4d6RUH61~DRqVcswEr-S5wehAkfg5xvv~-EY~d2b~eafVbbO-XPRVaXKs14UlZF~YfZaSBFK5y8v6cyPWm1QcJuuom1x8EjVwHjfxw46M2bbOH4cggReO57Bh17UQ4zwjQ__',
    auxImg: 'https://s3-alpha-sig.figma.com/img/d098/f908/607f3c33fa871b126d263cc1320acee8?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ao7TYaHD6GU8C-bKXK7EGULxE7ty-CfxvfLcj~X~XaSIUSxVC9wxs5Telec6K2lAg8gVu4pIsyhPZ2xJalkCPY3zCXwM4Y2yNkE~EBPpWTJxLYU6a2B9r3qAxIFSoMNKlvBdC8hDpEe6jURw2DSwG0Qt1OBHwtAmDUR~iPJkDAypQG0NtI4R2kGN~6tmpFQo72wgPPDh6uZJnjonwC46LWNvYHpTudkqjJT4AVnp6gUApFZCB6ewUOaMgB~YmbaM~GXoAq07iMnZVAMxHCoUoT4yi~ifp0MLjTwdS5gYZ~mqPTVVnZvF3FLqBJtpL-DpFqd3HL~-yaRcmkZxxtvdEQ__'
  },

]
</script>

<style>
/* Design Body */

/* Esconde a imagem inicialmente */

.dropdown-image {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 120px;
  height: 300px;
  object-fit: cover;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

/* Exibe a imagem quando passa o mouse */
.hover-div:hover .dropdown-image {
  display: block;
}

.embed-responsive-item {
  background-color: black;
}
</style>
  