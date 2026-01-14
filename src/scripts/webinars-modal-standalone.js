/* eslint-disable no-undef */
/**
 * Webinars Modal Script - Version Standalone pour Webflow
 * Adapté pour la page Webinaires avec structure .resources_list-inner_item
 * À coller dans Page Settings > Custom Code > Before </body> tag
 */
(function () {
  'use strict';

  function initWebinarsModal() {
    // Structure: .resources_list-inner_item.w-dyn-item contient .resources_list-inner_wrap (card) + .partners_tab_modal
    const items = document.querySelectorAll('.resources_list-inner_item.w-dyn-item');

    items.forEach(function (item) {
      // La zone cliquable est l'image avec le bouton play
      const card = item.querySelector('.resources_list-inner_img_wrap');
      const modal = item.querySelector('.partners_tab_modal');
      const modalCard = modal?.querySelector('.partners_tab_modal_card');
      const closeBtn = modal?.querySelector('.partners_tab_modal_close');

      if (!card || !modal) return;
      setupModal(card, modal, modalCard, closeBtn);
    });

    // Escape → fermer toutes les modales
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.partners_tab_modal').forEach(function (modal) {
          if (modal.style.display === 'flex') {
            const modalCard = modal.querySelector('.partners_tab_modal_card');
            closeModal(modal, modalCard);
          }
        });
      }
    });
  }

  function setupModal(card, modal, modalCard, closeBtn) {
    // Ajouter cursor pointer sur la card
    card.style.cursor = 'pointer';

    // Setup des transitions inline
    modal.style.transition = 'opacity 0.3s ease';
    if (modalCard) {
      modalCard.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }

    // Click sur la card → ouvrir
    card.addEventListener('click', function (e) {
      // Ne pas ouvrir si on clique sur la modal elle-même
      if (e.target.closest('.partners_tab_modal')) return;
      e.preventDefault();
      e.stopPropagation();
      openModal(modal, modalCard);
    });

    // Click sur la croix → fermer
    if (closeBtn) {
      closeBtn.style.cursor = 'pointer';
      closeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        closeModal(modal, modalCard);
      });
    }

    // Click sur l'overlay → fermer
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeModal(modal, modalCard);
      }
    });
  }

  function openModal(modal, modalCard) {
    // État initial (invisible)
    modal.style.opacity = '0';
    if (modalCard) {
      modalCard.style.opacity = '0';
      modalCard.style.transform = 'scale(0.95) translateY(10px)';
    }

    // Afficher
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Bloquer le scroll

    // Déclencher l'animation au prochain frame
    requestAnimationFrame(function () {
      modal.style.opacity = '1';
      if (modalCard) {
        modalCard.style.opacity = '1';
        modalCard.style.transform = 'scale(1) translateY(0)';
      }
    });
  }

  function closeModal(modal, modalCard) {
    // Animation de fermeture
    modal.style.opacity = '0';
    if (modalCard) {
      modalCard.style.opacity = '0';
      modalCard.style.transform = 'scale(0.95) translateY(10px)';
    }

    // Masquer après l'animation
    setTimeout(function () {
      modal.style.display = 'none';
      document.body.style.overflow = ''; // Restaurer le scroll
    }, 300);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWebinarsModal);
  } else {
    initWebinarsModal();
  }
})();
