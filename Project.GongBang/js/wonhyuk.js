const roomData = {
    1: {
        images: [
            '/Project.GongBang/img/room/won/room1-1.png',
            '/Project.GongBang/img/room/won/room1-2.png',
            '/Project.GongBang/img/room/won/room1-3.png'
        ],
        description: '베란다,현관이 분리되어 있어서 거실이 넓어요! 엘리베이터가 있어요! 주변에 편의시설이 많아 생활하기 편리해요! 주차장이 있어 주차 걱정 할 필요가 없어요!',
        address: '충청북도 청주시 상당구 서운동 59-1',
        monthlyRent: '400 / 20',
        managementFee: '5만원',
        options: [
            { name: '전자레인지', icon: '/Project.GongBang/img/etc/전자레인지.png' },
            { name: '에어컨', icon: '/Project.GongBang/img/etc/에어컨.png' },
            { name: '씽크대', icon: '/Project.GongBang/img/etc/씽크대.png' },
            { name: '수납장', icon: '/Project.GongBang/img/etc/수납장.png' },
            { name: '세탁기', icon: '/Project.GongBang/img/etc/세탁기.png' }
        ]
    },
    2: {
        images: [
            '/Project.GongBang/img/room/won/room2-1.png',
            '/Project.GongBang/img/room/won/room2-2.png',
            '/Project.GongBang/img/room/won/room2-3.png'
        ],
        description: '1층에 도어락이 있어서 안전해요! 주변이 변화가라 없는게 없어요! 주변에 버스정류장이 있어서 이동하기 편리해요! 주차장이 있어 주차 걱정 할 필요가 없어요!',
        address: '충청북도 청주시 상당구 북문로2가 106-12',
        monthlyRent: '300 / 12',
        managementFee: '3만원',
        options: [
            { name: '침대', icon: '/Project.GongBang/img/etc/침대.png' },
            { name: '에어컨', icon: '/Project.GongBang/img/etc/에어컨.png' },
            { name: '수납장', icon: '/Project.GongBang/img/etc/수납장.png' },
            { name: '건조대', icon: '/Project.GongBang/img/etc/건조대.png' },
            { name: '가스레인지', icon: '/Project.GongBang/img/etc/가스레인지.png' }
        ]
    }
};

$('#roomModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // 버튼을 누른 요소
    var room = button.data('room'); // data-room 속성에서 정보 추출

    var modal = $(this);
    var modalImages = modal.find('#modalImages');
    var modalDescription = modal.find('#modalDescription');
    var modalAddress = modal.find('#modalAddress');
    var modalMonthlyRent = modal.find('#modalMonthlyRent');
    var modalManagementFee = modal.find('#modalManagementFee');
    var modalOptions = modal.find('#modalOptions');

    var data = roomData[room];

    modalImages.empty(); // 이전 이미지 제거
    data.images.forEach(function(src) {
        var img = $('<img>').attr('src', src).addClass('img-fluid m-1').css('width', '99%');
        modalImages.append(img);
    });

    modalDescription.empty();
    modalDescription.append('<h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;상세 설명</h4>');
    data.description.split('!').forEach(function(text) {
        if (text.trim()) {
            modalDescription.append('<p><span class="arrow">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▶</span>' + text.trim() + '!</p>');
        }
    });

    modalAddress.text('▶ ' + data.address);
    modalMonthlyRent.text('▶ 월세 : ' + data.monthlyRent);
    modalManagementFee.text('▶ 관리비 : ' + data.managementFee);

    modalOptions.empty();
    modalOptions.append('<h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;옵션 정보</h4>');
    var optionsContainer = $('<div>').addClass('d-flex justify-content-center');
    data.options.forEach(function(option) {
        var optionSpan = $('<span>').addClass('mr-3');
        var optionImg = $('<img>').attr('src', option.icon).css('width', '50px').css('height', 'auto');
        optionSpan.append(optionImg).append('<br>').append(option.name);
        optionsContainer.append(optionSpan);
    });
    modalOptions.append(optionsContainer);
});
