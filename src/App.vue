<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <!-- Lien vers la page d'accueil avec icône -->
      <RouterLink class="navbar-brand" to="/">
        <!--<i class="bi bi-question-square"></i>--><!-- Icône pour le quiz -->
        <i class="bi bi-clipboard-check"></i>
        Quiz
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item"> <!--Ajouter trivia dans la bar de navigation avec comme logo un '?'-->
            <RouterLink class="nav-link" to="/trivia">
              <i class="bi bi-question"></i>
              Trivia
            </RouterLink>
          </li>
          <!-- Lien vers la page "À propos" avec icône -->
          <li class="nav-item">
            <RouterLink class="nav-link" to="/à propos">
              <i class="bi bi-info-square"></i>
              <!-- Icône pour "À propos" -->
              À propos
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact">
              <i class="bi bi-envelope"></i>
              <!-- Icône pour "Contact" -->
              Contact
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/parametre">
              <i class="bi bi-gear"></i>
              <!-- Icône pour "Paramètres" -->
              Paramètres
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
