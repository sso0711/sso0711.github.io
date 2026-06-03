const fs = require("fs");
const aubio = require("aubio");

const mp3FilePath = "path/to/your/music.mp3";

// 음악 파일 읽기
const mp3Buffer = fs.readFileSync(mp3FilePath);

// aubio에서 사용할 파라미터 설정
const bufferSize = 512; // 샘플링 윈도우 크기
const sampleRate = 44100; // 샘플링 레이트

// aubio 초기화
const aubioSource = new aubio.source(
  mp3Buffer,
  bufferSize,
  bufferSize,
  sampleRate
);

// Tempo 추정 초기화
const aubioTempo = new aubio.tempo(
  "default",
  bufferSize,
  bufferSize,
  sampleRate
);

// 박자 추출을 위한 변수 초기화
let beats = 0;
let lastBeatTime = -1;

// 박자 추출 이벤트 핸들러 등록
aubioTempo.on("beat", (beatPosition) => {
  // 박자가 발견되면 호출되는 콜백
  const currentTime = aubioTempo.get_time();

  if (lastBeatTime !== -1) {
    const durationBetweenBeats = currentTime - lastBeatTime;
    console.log(
      `Beat ${beats + 1}: Time ${lastBeatTime.toFixed(
        2
      )}s, Duration ${durationBetweenBeats.toFixed(2)}s`
    );
  }

  lastBeatTime = currentTime;
  beats++;

  // 여기에서 원하는 박자 횟수를 체크하여 조건을 만족하면 프로그램 종료 또는 다른 작업 수행 가능
});

// aubio 소스 시작
aubioSource.pipe(aubioTempo);
aubioSource.start();
