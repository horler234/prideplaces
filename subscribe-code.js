const info = document.querySelector('.subscribe-flex');

const addSubscriber = subscriber => {
  html = `
    <div class="info-wrapper">
        <p class="info">
            <span><strong>Name: </strong></span>
            <span>${subscriber.name}</span>
        </p>

        <p class="info">
            <span><strong>Email: </strong></span>
            <span>${subscriber.email}</span>
        </p>

        <p class="info">
            <span><strong>City: </strong></span>
            <span>${subscriber.city}</span>
        </p>

        <p class="info">
            <span><strong>State: </strong></span>
            <span>${subscriber.state}</span>
        </p>
    </div>
  `;

  info.innerHTML += html;
};

db.collection('prideplaces').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
      const doc = change.doc;
      if (change.type === 'added') {
          addSubscriber(doc.data());
      }
  });
});