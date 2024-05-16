<?php

namespace App\Model;

use App\Model\AbstractManager;
use PDO;
use Symfony\Component\HttpClient\HttpClient;

class SummaryManager extends AbstractManager
{
    public const TABLE = 'summary';

    
    public function getAllSummaries()
    {
        $query = "SELECT * FROM " . static::TABLE . " LEFT JOIN tree AS t ON t.id=summary.tree_id";
        $statement = $this->pdo->prepare($query);
        // $statement->bindValue(':id', $id, PDO::PARAM_INT);
        $statement->execute();

        return $statement->fetchAll();
    }

    public function getSummary(int $id)
    {
        $query = "SELECT * FROM " . static::TABLE . " LEFT JOIN tree AS t ON t.id=summary.tree_id WHERE summary.id=:id";
        $statement = $this->pdo->prepare($query);
        $statement->bindValue(':id', $id, PDO::PARAM_INT);
        $statement->execute();

        return $statement->fetch();
    }

    public function getResults()
    {
        $client = HttpClient::create();
        $response = $client->request(
            'POST',
            'https://'
        );
        
        $result = $response->toArray();

        return $result;
    }
}
