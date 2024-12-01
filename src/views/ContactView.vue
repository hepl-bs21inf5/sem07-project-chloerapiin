<!-- <template>
  <div class="container mt-3">
    <h1>Contact</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
</template> -->
<template>
  <div>
    <!-- Formulaire de contact -->
    <div class="container">
      <div class="card mt-4">
        <div class="card-body">
          <h1 class="card-title">Contact</h1>
          <form>
            <!-- Gender selection -->
            <div class="mb-3">
              <select class="form-select" required>
                <option value="f">Madame</option>
                <option value="m">Monsieur</option>
                <option value="n" selected>Neutre</option>
              </select>
            </div>

            <!-- Prénom -->
            <div class="col-12 col-sm-6 col-md-4 form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="firstname"
                placeholder="Prénom"
                required
              />
              <label for="firstname" class="form-label">Prénom*</label>
            </div>

            <!-- Nom -->
            <div class="col-12 col-sm-6 col-md-4 form-floating mb-3">
              <input type="text" class="form-control" id="lastname" placeholder="Nom" required />
              <label for="lastname" class="form-label">Nom*</label>
            </div>

            <!-- Email -->
            <div class="col-12 col-md-4 form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="name@example.com"
                required
              />
              <label for="email">Adresse mail*</label>
            </div>

            <!-- Message -->
            <div class="col-12 form-floating mb-3">
              <textarea
                class="form-control"
                placeholder="Votre message"
                id="message"
                style="height: 128px"
                required
              ></textarea>
              <label for="message">Message</label>
            </div>

            <!-- fichier à joindre -->
            <div class="col-12">
              <div class="input-group mb-3">
                <label class="input-group-text" for="file">Joindre</label>
                <input type="file" class="form-control" id="file" />
              </div>
            </div>

            <!-- Checkbox pour accepter de recevoir une réponse par mail -->
            <div class="col-12">
              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="check" required />
                <label class="form-check-label" for="check">
                  Accepter de recevoir une réponse par mail
                </label>
              </div>
            </div>

            <!-- Submit button -->
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
}
</script>

<style scoped>
/* Tu peux personnaliser les styles CSS ici */
.card {
  border-radius: 15px;
}
.navbar {
  margin-bottom: 30px;
}
</style>
