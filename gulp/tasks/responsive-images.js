var gulp = require('gulp'),
    responsive = require('gulp-responsive');
// runSequence = require('run-sequence');

// gulp.task('responsive-images', function(callback) {
//     runSequence('responsive-images-logos','responsive-sponsor-images',
//         callback
//     )
// });


gulp.task('responsive-images-logos', function() {
    return gulp.src(['public/**/*logo-square.jpg', '!public/events/2015*/**', '!public/events/2016*/**'])
        .pipe(responsive({
            // produce multiple images from one source

            '**/*logo-square.jpg': [{
                width: 250,
                height: 250,
            }],
        }, {
            // global configuration
            quality: 80,
            errorOnEnlargement: false,
            withoutEnlargement: false,
            progressive: true,
            silent: true,
            withMetadata: false,
            ignoreAspectRatio: true,
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('responsive-organizer-images', function() {
  return gulp.src(['public/**/organizers/*.jpg', '!public/events/2015*/**', '!public/events/2016*/**'])
    .pipe(responsive({
      '**/*.jpg': [{
        width: 600,
        height: 600,
      }],
    }, {
      // global configuration
      quality: 80,
      errorOnEnlargement: false,
      withoutEnlargement: false,
      progressive: true,
      silent: true,
      withMetadata: false,
      ignoreAspectRatio: true,
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('responsive-speaker-images', function() {
    return gulp.src(['public/**/speakers/*.jpg', 'public/**/speakers/*.png', '!public/events/2015*/**', '!public/events/2016*/**'])
        .pipe(responsive({
            '**/*.png': [{
                width: 600,
                height: 600
            }],
            '**/*.jpg': [{
                width: 600,
                height: 600
            }]
        }, {
            // global configuration
            quality: 80,
            errorOnEnlargement: false,
            withoutEnlargement: false,
            progressive: true,
            silent: true,
            withMetadata: false,
            ignoreAspectRatio: true,
        }))
        .pipe(gulp.dest('dist'));
});


gulp.task('responsive-sponsor-images', function() {
    return gulp.src(['public/img/sponsors/*.png', 'public/img/sponsors/*.jpg'])
        .pipe(responsive({
            '*.png': [{
                width: 200
            }],
            '*.jpg': [{
                width: 200
            }]
        }, {
            // global configuration
            quality: 80,
            errorOnEnlargement: false,
            withoutEnlargement: false,
            progressive: true,
            silent: true,
            withMetadata: false,
        }))
        .pipe(gulp.dest('dist/img/sponsors'));
});


gulp.task('responsive-images-remaining', function() {
    return gulp.src(['public/**/*.png', 'public/**/*.jpg','public/**/*.jpeg',
            '!public/favicon*', '!public/apple-icon*', '!public/android-icon*', '!public/ms-icon*', '!public/**/sharing.jpg', '!**/logo-square.*', '!public/img/sponsor/*.*', '!public/**/organizers/*.jpg','!public/**/speakers/*.jpg','!public/**/speakers/*.png','!public/**/organizers/*.png',  '!public/events/2015*/**', '!public/events/2016*/**'
        ])
        .pipe(responsive({
            // produce multiple images from one source
            '**/*.png': [{
                width: '100%'
            }],
            '**/*.jpeg': [{
                width: '100%'
            }],
            '**/*.jpg': [{
                width: '100%'
            }]
        }, {
            // global configuration
            quality: 80,
            errorOnEnlargement: false,
            withoutEnlargement: false,
            errorOnUnusedImage: false,
            progressive: true,
            silent: true,
            withMetadata: false,
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('responsive-images', gulp.parallel('responsive-images-logos', 'responsive-speaker-images','responsive-sponsor-images', 'responsive-organizer-images','responsive-images-remaining'))
