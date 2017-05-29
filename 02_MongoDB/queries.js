db.grades.find({
  'scores': {
    $elemMatch: {
      score: {
        $gt: 87,
        $lt: 93
      }
    }
  }
});

db.grades.aggregate(
  [
    {
      $unwind: '$scores'
    }, {
      $match: {
        'scores.type': 'exam',
        'scores.score': {
          $gt: 90
        }
      }
    }
  ]
);

db.grades.update({
  name: 'Dusti Lemmond'
}, {
  $set: {
    accepted: true
  }
}, {
  multi: true
});