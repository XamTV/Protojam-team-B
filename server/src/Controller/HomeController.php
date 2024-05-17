<?php

namespace App\Controller;

use App\Model\QuestionsManager;
use App\Model\SummaryManager;
use App\Model\TreeManager;

class HomeController extends AbstractAPIController
{
    /**
     * Display home page
     */
    public function index(): string
    {
        var_dump($_SESSION);
        return $this->twig->render('Home/index.html.twig');
    }

    public function getAllTrees(): string
    {
        $treeManager = new TreeManager();
        $trees = $treeManager->selectAll();

        return json_encode($trees);
    }

    public function getAllTexts(): string
    {
        $treeManager = new SummaryManager();
        $summaries = $treeManager->selectAll();

        return json_encode(['summaries' => $summaries]);
    }

    public function getAllSummaries(): string
    {
        $treeManager = new SummaryManager();
        $summaries = $treeManager->getAllSummaries();

        return json_encode($summaries);
    }

    public function getAllQuestions(): string
    {
        $questionsManager = new QuestionsManager();
        $questions = $questionsManager->selectAll();

        return json_encode($questions);
    }
}
