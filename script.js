var container=$(".container")
        // color-coding times
        var currentHour = moment().format("H")

      var hours=["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]
      var militaryHours=[9,10,11,12,13,14,15,16,17]

      for (let index = 0; index < hours.length; index++) {

        var classColor = ''

        if(militaryHours[index] < currentHour ) {
            classColor = "past"
        } else if (militaryHours[index] == currentHour ) {
            classColor = "present"
        } else {
            classColor = "future"
        }

        // container.append(`
        // <div class="row">
        //   <div class="col-sm-1 hour">${hours[index]}</div>  
        //    <div class="col-sm-9"><textarea class="form-control h-100 p-0 ${classColor}"></textarea></div>
        //   <div class="col-sm-2"> <button class="saveBtn h-100 w-100 p-0 m-0"><i class="far fa-save"></i></button></div>
        // </div>
        // `)

        var rowDiv = $('<div>');
        rowDiv.addClass('row');

        var hourDiv = $('<div>');
        hourDiv.addClass('col-sm-1 hour');
        hourDiv.text(hours[index]);

        var textDiv = $('<div>');
        textDiv.addClass('col-sm-9');

        var textArea = $('<textarea>');
        textArea.attr('id', 'text-' + militaryHours[index]);
        textArea.addClass(`form-control h-100 p-0 ${classColor}`);

        textDiv.append(textArea);

        var buttonDiv = $('<div>');
        buttonDiv.addClass('col-sm-2');

        var saveButton = $('<button>');
        saveButton.addClass('saveBtn h-100 w-100 p-0 m-0');

        // attach event listeners
        saveButton.on('click', () => {
            console.log('Hello, this is button for hour ' + militaryHours[index]);

            var myTextArea = $('#text-'+militaryHours[index]);

            var saveText = myTextArea.val();

            if(localStorage.getItem('tasks') == null) {
                localStorage.setItem('tasks', '[]');
        
            }
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            tasks.push({
                hour: militaryHours[index],
                text: saveText
            });
        
            localStorage.setItem('tasks', tasks);  
        })

        var icon = $('<i>');
        icon.addClass('far fa-save');

        saveButton.append(icon);
        buttonDiv.append(saveButton);

        rowDiv.append(hourDiv);
        rowDiv.append(textDiv);
        rowDiv.append(buttonDiv);

        container.append(rowDiv);




}

$('#currentDay').text(moment().format("dddd, MMMM Do YYYY"));


console.log(currentHour);