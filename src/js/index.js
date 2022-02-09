let myArray = [];

$.ajax({
	method: 'GET',
	url: 'https://restcountries.com/v3.1/all',
	success: function (response) {
		myArray = response;
		myArray.sort(SortByOfficialName);
		buildTable(myArray);
	},
});

function SortByOfficialName(x, y) {
	return x.name.official == y.name.official
		? 0
		: x.name.official > y.name.official
		? 1
		: -1;
}

function buildTable(data) {
	let table = document.getElementById('countries-tbl');

	for (let i = 0; i < data.length; i++) {
		let row = `<tr>
                        <td>${data[i].name.official}</td>
                        <td>${
													data[i].capital === undefined
														? 'No capital to display'
														: data[i].capital
												}</td>
                        <td>${data[i].region}</td>
                        <td>${
													data[i].languages === undefined
														? 'No languages to display'
														: data[i].languages
												}</td>
                        <td>${data[i].population}</td>
                        <td><img src="${
													data[i].flags.png
												}" style="height:35px"></td>
                    </tr>`;
		table.innerHTML += row;
	}
}
