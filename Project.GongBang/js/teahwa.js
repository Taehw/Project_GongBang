const roomData = {
    1: {
        images: [
            '/Project.GongBang/img/room/tae/room1-1.png',
            '/Project.GongBang/img/room/tae/room1-2.png',
            '/Project.GongBang/img/room/tae/room1-3.png'
        ],
        description: '거실과 주방이 분리되어서 사용하기 편리한 구조에요! 주변에 편의시설이 많아 생활하기 편리해요! 밑에 주차장이 있어 주차 걱정 할 필요가 없어요! 귀갓길 걱정 없는 안전한 주거지역에 위치해 있어요!',
        address: '충청북도 청주시 흥덕구 복대동 497-6',
        monthlyRent: '400 / 20',
        managementFee: '3만원',
        options: [
            { name: '서랍장', icon: '/Project.GongBang/img/etc/서랍장.png' },
            { name: '에어컨', icon: '/Project.GongBang/img/etc/에어컨.png' },
            { name: '씽크대', icon: '/Project.GongBang/img/etc/씽크대.png' },
            { name: '수납장', icon: '/Project.GongBang/img/etc/수납장.png' },
            { name: '냉장고', icon: '/Project.GongBang/img/etc/냉장고.png' }
        ]
    },
    2: {
        images: [
            '/Project.GongBang/img/room/tae/room2-1.png',
            '/Project.GongBang/img/room/tae/room2-2.png',
            '/Project.GongBang/img/room/tae/room2-3.png'
        ],
        description: '가운데 미닫이문이 있어서 공간이 분리되어 있어요! 주변에 편의시설이 많아 생활하기 편리해요! 다른 원룸에 비해 방이 크게 나왔어요! 화장실이 넓어서 사용하기 편리해요!',
        address: '충청북도 청주시 흥덕구 복대동 3224',
        monthlyRent: '500 / 30',
        managementFee: '5만원',
        options: [
            { name: '침대', icon: '/Project.GongBang/img/etc/침대.png' },
            { name: '에어컨', icon: '/Project.GongBang/img/etc/에어컨.png' },
            { name: '씽크대', icon: '/Project.GongBang/img/etc/씽크대.png' },
            { name: '책상', icon: '/Project.GongBang/img/etc/책상.png' },
            { name: '전자레인지', icon: '/Project.GongBang/img/etc/전자레인지.png' }
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
