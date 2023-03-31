const { src, dest } = require(`gulp`);
const htmlCompressor = require(`gulp-htmlmin`);

let compressHTML = () => {
    return src(`uncompressed-html/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`compressed-html/`));
};

exports.compressHTML = compressHTML;

let browserChoice = `default`;

async function chrome () {
    browserChoice = `google chrome`;
}


// const { watch } = require(`gulp`),
//     browserSync = require(`browser-sync`);

// let serve = () => {
//     browserSync({
//         notify: true,
//         reloadDelay: 50,
//         server: {
//             baseDir: `./`
//         }
//     });

//     watch(`css/*.css`).on(`change`, browserSync.reload);
//     watch(`*.html`).on(`change`, browserSync.reload);
// };

// exports.default = serve;

const {
    src,
    dest,
    parallel,
    series,
    watch
} = require('gulp');

const uglify = require('gulp-uglify');
const rename = require()
