import React from "react";
import "../css/desktop.css";

const Introduction = () => {
  return (
    <div>
      <h2>Введение</h2>
      <p className="mt-3 mb-0 text-justify">
        В рамках настоящей работы будет впервые описана и предложена к
        рассмотрению концепция компьютерной программы, которая позволит
        стандартизировать процесс оценивания курсовых и дипломных работ,
        экономить время преподавателей на исправлении повторяющихся, типичных
        ошибок студентов, а также частично дополнит функциональные возможности
        программы «Антиплагиат».
      </p>
      <p className="mt-3 mb-0 text-justify">
        Актуальность данной компьютерной программы обусловлена тем, что процесс
        проверки курсовых и дипломных работ, как правило, с позиции
        преподавателей, составляющих экспертную комиссию, представляет собой
        процесс повторения и разъяснений одних и тех же ошибок различным
        студентам. Однако, с позиции программирования, то действие, которое
        повторяется неоднократно, должно быть вынесено в отдельную функцию,
        которая позволит экономить время на данном действии, а сэкономленное
        время направлять на более целесообразные образовательному процессу
        действия.
      </p>
      <p className="mt-3 mb-0 text-justify">
        Помимо прочего, в процессе оценивания работ имеет место такое явление,
        как «преподавательская этика». Согласно ей, даже если научный
        руководитель дал неверную рекомендацию студенту по подготовке или
        оформлению работы, то член комиссии не может критиковать действия др.
        преподавателя, являющегося научным руководителем.
      </p>
      <p className="mt-3 mb-0 text-justify">
        Ситуация осложняется также тем, что в науках присутствует деление на
        технические, естественные и гуманитарные науки. И если в технических
        науках значительно легче вводить стандарты оценки качества работы, что
        обусловлено ориентацией последних на точность и объективные,
        количественные данные, то для гуманитарных наук характерно множество
        субъективных точек зрения, которое прослеживается как при широком
        взгляде на работы классиков, так и при знакомстве с методами
        воспитательного воздействия на студентов разными педагогами.
      </p>
      <p className="mt-3 mb-0 text-justify">
        Таким образом, студенту гуманитарного направления на текущий момент
        приходится буквально собирать крупицы информации (точек зрения разных
        преподавателей), выделять в ней важное и отсеивать ненужное. И даже эти
        проделанные студентом действия вовсе не гарантируют, что, по итогам
        защиты работы, он получит максимально объективную оценку, поскольку
        члены комиссии на защите могут иметь отличную точку зрения, нежели
        научные руководители.
      </p>
      <p className="mt-3 text-justify">
        Вышеописанные проблемы, характерные для процесса защиты курсовых и
        дипломных работ, возможно решить (либо как минимум минимизировать) при
        создании единых стандартов оценивания проделанной студентами работы.
        Описанная далее концепция компьютерной программы как раз позволит в
        некоторой степени стандартизировать данный процесс.
      </p>
    </div>
  );
};

export default Introduction;