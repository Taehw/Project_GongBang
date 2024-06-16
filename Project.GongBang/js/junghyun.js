const roomData = {
    1: {
        images: [
            '/Project.GongBang/img/room/hyun/room1-1.png',
            '/Project.GongBang/img/room/hyun/room1-2.png',
            '/Project.GongBang/img/room/hyun/room1-3.png'
        ],
        description: '방 3의 상세 정보입니다.'
    },
    2: {
        images: [
            '/Project.GongBang/img/room/hyun/room2-1.png',
            '/Project.GongBang/img/room/hyun/room2-2.png',
            '/Project.GongBang/img/room/hyun/room2-3.png'
        ],
        description: '방 4의 상세 정보입니다.'
    }
};

$('#roomModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // 버튼을 누른 요소
    var room = button.data('room'); // data-room 속성에서 정보 추출

    var modal = $(this);
    var modalImages = modal.find('#modalImages');
    var modalDescription = modal.find('#modalDescription');

    var data = roomData[room];

    modalImages.empty(); // 이전 이미지 제거

    data.images.forEach(function(src) {
        var img = $('<img>').attr('src', src).addClass('img-fluid m-1').css('width', '99%');
        modalImages.append(img);
    });

    modalDescription.text(data.description);
});
