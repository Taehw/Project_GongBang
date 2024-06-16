const roomData = {
    1: {
        images: [
            '/Project.GongBang/img/room/tae/room1-1.png',
            '/Project.GongBang/img/room/tae/room1-2.png',
            '/Project.GongBang/img/room/tae/room1-3.png'
        ],
        description: '방 1의 상세 정보입니다.'
    },
    2: {
        images: [
            '/Project.GongBang/img/room/tae/room2-1.png',
            '/Project.GongBang/img/room/tae/room2-2.png',
            '/Project.GongBang/img/room/tae/room2-3.png'
        ],
        description: '방 2의 상세 정보입니다.'
    }
};

$('#roomModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); 
    var room = button.data('room'); 

    var modal = $(this);
    var modalImages = modal.find('#modalImages');
    var modalDescription = modal.find('#modalDescription');

    var data = roomData[room];

    modalImages.empty(); 

    data.images.forEach(function(src) {
        var img = $('<img>').attr('src', src).addClass('img-fluid m-1').css('width', '99%');
        modalImages.append(img);
    });

    modalDescription.text(data.description);
});
