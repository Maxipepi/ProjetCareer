function CareerCtrl($scope, $http) {
	$scope.articles = {
		"a1":	{"title": "Titre A1",
				"text": "Texte du A1"},
		"a2":	{"title": "Titre A2",
				"text": "Texte du A2"},
		"a2p":	{"title": "Titre A2'",
				"text": "Texte du A2'"},
		"a2pp":	{"title": "Titre A2''",
				"text": "Texte du A2''"},
		"a3":	{"title": "Titre A3",
				"text": "Texte du A3"},
		"a3p":	{"title": "Titre A3'",
				"text": "Texte du A3'"},
		"a3pp":	{"title": "Titre A3''",
				"text": "Texte du A3''"},			
	}
} 

/* function CareerCtrl($scope, $http) {
  $http.get('articles/articles.json').success(function(data) {
    $scope.articles = data;
  });
}  */