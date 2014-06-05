function autoSave(event){
    
    //컨텐츠의 내용 가져오기
    var value = $('#contents').val();
    
    window.localStorage.setItem('note_contents', value);
}

function autoLoad(event){
    $('#contents').val(window.localStorage.getItem('note_contents'));
    
}


console.log(1);
$('#contents').on('keyup', autoSave);
$(window).on("load", autoLoad);

$('.summernote').summernote({

    height:300
});