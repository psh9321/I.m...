import gulp from "gulp"
import uglify from "gulp-uglify"
import insert from "gulp-insert"

/** 폴더 경로 */
const DIR = {
    DEV : "src",
    PROD : "src_dist"
}

const DEV = {
    ONE : `${DIR["DEV"]}/index/**`,
    TWO : `${DIR["DEV"]}/index2/**`,
}

const PROD = {
    ONE : `${DIR["PROD"]}/index`,
    TWO : `${DIR["PROD"]}/index2`,
}

/** build 시간 */
function GetCurrentTime() {
    const options = { timeZone: 'Asia/Seoul', locale: 'ko-KR' };
    return new Date().toLocaleString('ko-KR', options);
}

gulp.task("index", () => {
    return gulp.src(DEV["ONE"])
    .pipe(uglify())
    .pipe(insert.append(`// build date : ${GetCurrentTime()}`))
    .pipe(gulp.dest(PROD["ONE"]))
})

gulp.task("index2", () => {
    return gulp.src(DEV["TWO"])
    .pipe(uglify())
    .pipe(insert.append(`// build date : ${GetCurrentTime()}`))
    .pipe(gulp.dest(PROD["TWO"]))
})

gulp.task("dev", gulp.parallel(["index", "index2"]), () => {
  return console.log("gulp...")
})