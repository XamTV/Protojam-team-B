<?php

namespace App\Model;

use PDO;

/**
 * This class make a PDO object instanciation.
 */
class AccountManager extends AbstractManager
{

    public const TABLE = 'user';

    public function register(array $user)
    {
        $query = "INSERT INTO " . static::TABLE . " (`name`, `password`)
        VALUES (:name, :password)";
        $statement = $this->pdo->prepare($query);
        $statement->bindValue(':name', $user['username']);
        $statement->bindValue(':password', $user['password']);
        $statement->execute();

        return $user;
    }

    public function selectOneByName(array $user)
    {
        
        $statement = $this->pdo->prepare("SELECT * FROM " . static::TABLE . " WHERE name=:name");
        $statement->bindValue(':name', $user['username'], \PDO::PARAM_STR);
        $statement->execute();

        return $statement->fetch();
    }

}