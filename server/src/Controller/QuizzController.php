<?php

namespace App\Controller;

use App\Controller\AbstractAPIController;
use App\Model\PersonalityManager;
use App\Model\QuestionManager;
use App\Model\SummaryManager;
use App\Model\TreeManager;

class QuizzController extends AbstractAPIController
{
    public function getResults()
    {
        $summaryManager = new SummaryManager();
        $results = $summaryManager->getResults();        
        return $results;
        // var_dump($results);
        // die();

        // $score = $_GET['score'];

        // if ($_SERVER['REQUEST_METHOD'] === "POST") { 
        //     // $score = $_POST['points'];
        //     if ( $score >= 10 && $score <= 15) {
        //         $result = $summaryManager->getSummary(1);
        //         header('Location: results');
        //     }

        //     var_dump($score);
        //     die();
        //     $result = $summaryManager->getSummary(1);
        //     header('Location: results');
        //     return json_encode($result);
        // }

        // if ( $score > 10) {
        //     $summary = $summaryManager->getSummary(1);
        //     header('Location: /results');
        //     return json_encode($summary);
        // }
    }
}
