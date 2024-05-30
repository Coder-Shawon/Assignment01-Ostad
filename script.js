document.addEventListener('DOMContentLoaded', function () {
    const minusBtnBasic = document.getElementById('minus-btn-basic');
    const plusBtnBasic = document.getElementById('plus-btn-basic');
    const signUpBtnBasic = document.getElementById('sign-up-btn-basic');
    const roomCountElementBasic = document.getElementById('room-count-basic');
    const roomPriceElementBasic = document.getElementById('room-price-basic');

    const minusBtnPro = document.getElementById('minus-btn-pro');
    const plusBtnPro = document.getElementById('plus-btn-pro');
    const signUpBtnPro = document.getElementById('sign-up-btn-pro');
    const roomCountElementPro = document.getElementById('room-count-pro');
    const roomPriceElementPro = document.getElementById('room-price-pro');

    const thankYouText = document.getElementById('thank-you-text');
    const finalRoomCount = document.getElementById('final-room-count');

    let roomCountBasic = 1;
    const roomPriceBasic = 199;

    let roomCountPro = 1;
    const roomPricePro = 249;

    function updateRoomDetailsBasic() {
        roomCountElementBasic.textContent = `${roomCountBasic} room${roomCountBasic > 1 ? 's' : ''}`;
        roomPriceElementBasic.textContent = `$${roomCountBasic * roomPriceBasic}`;
    }

    function updateRoomDetailsPro() {
        roomCountElementPro.textContent = `${roomCountPro} room${roomCountPro > 1 ? 's' : ''}`;
        roomPriceElementPro.textContent = `$${roomCountPro * roomPricePro}`;
    }

    minusBtnBasic.addEventListener('click', function () {
        if (roomCountBasic > 1) {
            roomCountBasic--;
            updateRoomDetailsBasic();
        }
    });

    plusBtnBasic.addEventListener('click', function () {
        roomCountBasic++;
        updateRoomDetailsBasic();
    });

    signUpBtnBasic.addEventListener('click', function () {
        finalRoomCount.textContent = `${roomCountBasic} room${roomCountBasic > 1 ? 's' : ''}`;
        thankYouText.style.display = 'block';
    });

    minusBtnPro.addEventListener('click', function () {
        if (roomCountPro > 1) {
            roomCountPro--;
            updateRoomDetailsPro();
        }
    });

    plusBtnPro.addEventListener('click', function () {
        roomCountPro++;
        updateRoomDetailsPro();
    });

    signUpBtnPro.addEventListener('click', function () {
        finalRoomCount.textContent = `${roomCountPro} room${roomCountPro > 1 ? 's' : ''}`;
        thankYouText.style.display = 'block';
    });
});
