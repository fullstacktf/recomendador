<template>
  <div class="w-3/4 h-64 m-auto overflow-hidden">
    <slider
      ref="slider"
      :options="options"
      @slide="slide"
      @tap="onTap"
      @init="onInit"
    >
      <slideritem
        v-for="(item, index) in someList"
        :key="index"
        :style="item.style"
        >{{ item.html }}</slideritem
      >
      <div class="text-center" slot="loading">LOAGING...</div>
    </slider>
  </div>
</template>
<script>
import { slider, slideritem } from "vue-concise-slider";
export default {
  el: "#app",
  data() {
    return {
      someList: [
        {
          html: "ACTION",
          button: "press",
          a: 'href("https://www.w3schools.com/cssref/css_websafe_fonts.asp")',
          style: {
            color: "#f1f1f1",
            "font-weight": "700",
            "text-shadow": "4px 4px 8px #000000",
            backgroundImage:
              'url("https://i.pinimg.com/originals/7d/28/4e/7d284e16569925155c7f2e2c3441821b.jpg")',
            "background-size": "6em",
            width: "23.5%",
            "margin-right": "2%"
          }
        },
        {
          html: "ANIMATION",
          style: {
            color: "#f1f1f1",
            "font-weight": "700",
            "text-shadow": "4px 4px 8px #000000",
            backgroundImage:
              'url("https://www.limitedruns.com/media/images/productimage-picture-my-neighbor-totoro-5-482873.jpg")',
            "background-size": "6em",
            width: "23.5%",
            "margin-right": "2%"
          }
        },
        {
          html: "COMEDY",
          style: {
            color: "#f1f1f1",
            "font-weight": "700",
            "text-shadow": "4px 4px 8px #000000",
            backgroundImage:
              'url("http://es.web.img1.acsta.net/r_x_600/newsv7/16/02/10/20/50/0585930.gif")',
            "background-size": "8em",
            width: "23.5%",
            "margin-right": "2%"
          }
        },
        {
          html: "CRIME",
          style: {
            color: "#f1f1f1",
            "font-weight": "700",
            "text-shadow": "4px 4px 8px #000000",
            backgroundImage:
              'url("https://i.pinimg.com/originals/da/39/9d/da399d99917f9d24683057357444ae6a.jpg")',
            "background-size": "6em",
            width: "23.5%",
            "margin-right": "2%"
          }
        },
        {
          html: "DRAMA",
          style: {
            color: "#f1f1f1",
            "font-weight": "700",
            "text-shadow": "4px 4px 8px #000000",
            backgroundImage:
              'url("https://i.pinimg.com/originals/92/50/72/92507239f801b3a3336035e7d0febdc8.jpg")',
            "background-size": "6em",
            width: "23.5%",
            "margin-right": "2%"
          }
        },
        {
          html: "FAMILY",
          style: {
            color: "#f1f1f1",
            "font-weight": "700",
            "text-shadow": "4px 4px 8px #000000",
            backgroundImage:
              'url("https://64.media.tumblr.com/ed3bb05a0cb64c9658d862a549597aa8/tumblr_pjtg7hQfXY1uwe8gdo1_640.jpg")',
            "background-size": "6em",
            width: "23.5%",
            "margin-right": "2%"
          }
        },
        {
          html: "FANTASY",
          style: {
            color: "#f1f1f1",
            "font-weight": "700",
            "text-shadow": "4px 4px 8px #000000",
            backgroundImage:
              'url("https://www.machodominante.es/wp-content/uploads/2018/07/GotGREF-WEB.jpg")',
            "background-size": "7em",
            width: "23.5%",
            "margin-right": "2%"
          }
        },
        {
          html: "FICTION",
          style: {
            color: "#f1f1f1",
            "font-weight": "700",
            "text-shadow": "4px 4px 8px #000000",
            backgroundImage:
              'url("https://www.machodominante.es/wp-content/uploads/2018/07/Alien-1200x750.jpg")',
            "background-size": "9.5em",
            width: "23.5%",
            "margin-right": "2%"
          }
        },
        {
          html: "ROMANCE",
          style: {
            color: "#f1f1f1",
            "font-weight": "700",
            "text-shadow": "4px 4px 8px #000000",
            backgroundImage:
              'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a561f47b-90e9-4aa5-a0fb-3db9804692da/d3fpqs8-3789644f-642d-4cbc-827d-116c902370bd.jpg/v1/fill/w_867,h_921,q_70,strp/forever__by_viria13_d3fpqs8-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05NTYiLCJwYXRoIjoiXC9mXC9hNTYxZjQ3Yi05MGU5LTRhYTUtYTBmYi0zZGI5ODA0NjkyZGFcL2QzZnBxczgtMzc4OTY0NGYtNjQyZC00Y2JjLTgyN2QtMTE2YzkwMjM3MGJkLmpwZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.NcaN4SGRAMjJdWOyYHnS3v1DaQxaVxSGzuy2dEqYOj8")',
            "background-size": "7em",
            width: "23.5%",
            "margin-right": "2%"
          }
        },
        {
          html: "THRILLER",
          style: {
            color: "#f1f1f1",
            "font-weight": "700",
            "text-shadow": "4px 4px 8px #000000",
            backgroundImage:
              'url("https://i.pinimg.com/originals/82/b0/2e/82b02e67ecdfac36804f1b4fdc78d10e.jpg")',
            "background-size": "7em",
            width: "23.5%",
            "margin-right": "2%"
          }
        },

        {
          html: "slider8",
          style: {
            background: "#7caabe",
            width: "23.5%",
            "margin-right": "2%"
          }
        }
      ],
      options: {
        currentPage: 0,
        pagination: false,
        tracking: false,
        thresholdDistance: 100,
        thresholdTime: 300,
        infinite: 4,
        slidesToScroll: 4,
        loop: true,
        loopedSlides: 1
      }
    };
  },
  components: {
    slider,
    slideritem
  }
};
</script>
