class ScheduleItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
      this.innerHTML = `<div class="timeline-content">
                                <h3 class="date">20th may, 2022</h3>
                                <h1>1st MCT Event</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab
                                    laudantium
                                    voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.
                                </p>

                                <div class="winner_team">
                                    <div class="winners">
                                        <p>
                                            Winners
                                        </p>
                                        <div class="winner-avatars">
                                            <a>
                                                <button type="button" class="btn-winner-avatars">
                                                    <img src="/assets/mark.png">
                                                </button>
                                            </a>
                                            <a>
                                                <button type="button" class="btn-winner-avatars">
                                                    <img src="/assets/mark.png">
                                                </button>
                                            </a>
                                            <a>
                                                <button type="button" class="btn-winner-avatars">
                                                    <img src="/assets/mark.png">
                                                </button>
                                            </a>
                                            <a>
                                                <button type="button" class="btn-winner-avatars">
                                                    <img src="/assets/mark.png">
                                                </button>
                                            </a>
                                            <a>
                                                <button type="button" class="btn-winner-avatars">
                                                    <img src="/assets/mark.png">
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="winners">
                                        <p>1st <i class="fas fa-trophy"></i></p>
                                        <div class="winner-avatars">
                                            <a>
                                                <button type="button" class="btn-winner-avatars">
                                                    <img src="/assets/mark.png">
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
  }
}

customElements.define('schedule-item', ScheduleItem);
